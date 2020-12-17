f1dc <- read_csv("f1_dr_cons_full.csv")
View(f1dc)
str(f1dc)

f1 = f1dc[,c(1:15)]
f1 = f1[,c(-1,-2,-6,-8,-10,-11:-14)]
str(f1)

head(f1)
range(f1$raceyear)
subset(f1, drivername == "prost")
range(subset(f1, drivername == "prost")$raceyear)
range(subset(f1, drivername == "senna")$raceyear)
range(subset(f1, drivername == "michael_schumacher")$raceyear)
as.data.frame(subset(f1, drivername == "michael_schumacher" & raceyear > 1992 & raceyear < 1996))
unique(subset(f1, constructorname == "Lotus F1")$drivername)
unique(subset(f1, constructorname == "Williams")$drivername)
unique(subset(f1, constructorname == "Lotus F1")$raceyear)

write_file = function(dx, filename){
  write_csv(x = dx, paste(filename, ".csv", sep=""))
}

sum_point = function(team){
  g = team %>% group_by(drivername, constructorname) %>% mutate(ttlpoint = sum(points))
  sort = subset(g[order(g$raceyear, g$drivername),])
  agg = unique(sort[,c("drivername","constructorname","ttlpoint")])
}

get_constructor = function(team){
  g = as.data.frame(unique(team$constructorname))
  colnames(g) = "constructor"
  row.names(g) = NULL
  g
}

get_relatinoship = function(all){
  g = data.frame(all$constructorname, all$drivername, all$ttlpoint)
  colnames(g) = c("constructorname", "drivername", "ttlpoint")
  g = g[order(g$constructorname),]
}

# main
#Extract Legend Driver - All time
senna = subset(f1, drivername == "senna")
prost = subset(f1, drivername == "prost")
ms = subset(f1, drivername == "michael_schumacher")
lauda = subset(f1, drivername == "lauda")
mansell = subset(f1, drivername == "mansell")
hakkinen = subset(f1, drivername == "hakkinen")
alonso = subset(f1, drivername == "alonso")

#Extract by Constructor - Year 2010 to 2020
fer = subset(f1, constructorname == 'Ferrari' & raceyear > 2009)
mer = subset(f1, constructorname == 'Mercedes' & raceyear > 2009)
rbr = subset(f1, constructorname == 'Red Bull' & raceyear > 2009)
mcl = subset(f1, constructorname == 'McLaren' & raceyear > 2009)
wls = subset(f1, constructorname == 'Williams' & raceyear > 2009)

ren = subset(f1, constructorname == 'Renault' & raceyear > 2009) 
has = subset(f1, constructorname == 'Haas F1 Team' & raceyear > 2009) 
afr = subset(f1, constructorname == 'Alfa Romeo' & raceyear > 2009) 
rcp = subset(f1, constructorname == 'Racing Point' & raceyear > 2009) 
tor = subset(f1, constructorname == 'Toro Rosso' & raceyear > 2009) 

# fix data issue
# sub('a','b',c('ab','da'))
rbr$drivername = sub('giovinazzi', 'gasly', rbr$drivername)
tor$drivername = sub('giovinazzi', 'gasly', tor$drivername)

# Checking
# table(fer$drivername)
# table(mer$drivername)
# table(rbr$drivername)
# table(mcl$drivername)
# table(wls$drivername)
# table(tor$drivername)

# Sum points - per team, driver
agg_fer = sum_point(fer)
agg_mer = sum_point(mer)
agg_rbr = sum_point(rbr)
agg_mcl = sum_point(mcl)
agg_wls = sum_point(wls)

agg_ren = sum_point(ren)
agg_has = sum_point(has)
agg_afr = sum_point(afr)
agg_rcp = sum_point(rcp)
agg_tor = sum_point(tor)

# Sum Points - Per Legend Driver
agg_senna = sum_point(senna)
agg_prost = sum_point(prost)
agg_ms = sum_point(ms)
agg_lauda = sum_point(lauda)
agg_mansell = sum_point(mansell)
agg_hakkinen = sum_point(hakkinen)
agg_alonso = sum_point(alonso)

# Combine constructor result
all_team = rbind(
  agg_fer, 
  agg_mer,
  agg_rbr,
  agg_mcl,
  agg_wls,
  agg_ren,
  agg_has,
  agg_afr,
  agg_rcp,
  agg_tor)

# Exclusion list
exclude_driver = c(
"webber",
"vandoorne",
"barrichello",
"hulkenberg",
"maldonado",
"bruno_senna",
"resta",
"sirotkin",
"petrov",
"heidfeld",
"jolyon_palmer",
"gutierrez",
"alguersuari",
"buemi",
"vergne",
"brendon_hartley",
"kubica",
"button",
"massa",
"rosberg",
"alonso",
"michael_schumacher")


# exclusion 
length(exclude_driver)
unique(exclude_driver) #21
table(exclude_driver)
`%notin%` <- Negate(`%in%`)

# all_team no. of driver
nrow(all_team)
length(unique(all_team$drivername)) #42
#as.data.frame(unique(all_team[order(all_team$drivername),][,1]))

# exclude
ex = subset(all_team, drivername %notin% exclude_driver)
as.data.frame(unique(ex[order(ex$drivername),][,1]))
unique(ex$drivername)

all_team_legend = rbind(
  ex,
  agg_senna,
  agg_prost,
  agg_ms,
  agg_lauda,
  agg_alonso
)

all_team_legend

#constructor only
constructor = get_constructor(all_team_legend)
write_file(constructor, "cons")

#driver_const_relate
driver_const_relate = get_relatinoship(all_team_legend)
write_file(driver_const_relate, "dr_cons_relate")


# end main

subset(driver_const_relate, drivername %in% c('alonso', 'michael_schumacher', 'hamilton'))
as.data.frame(agg_ms)

all_team_legend$constructorname
all_team_legend$drivername
all_team_legend$ttlpoint

driver_const_relate

#driver_const_relate = data.frame(all_team_legend[2], all_team_legend[1], all_team_legend[3])
#driver_const_relate = driver_const_relate[order(driver_const_relate$constructorname),]

ex_cons = c(
  "Minardi",
  "March-Ford",
  "Brabham-Ford",
  "March"
)

# exclude from constructor later
#

unique(all_team_legend$drivername)

agg_senna
agg_prost
agg_ms
agg_alonso
agg_lauda


agg_mansell
agg_hakkinen

# + team
# Toleman
# Team Lotus
# Jordan
# Benetton
# BRM
# Brabham
# Brabham-Alfa Romeo
# 
# - team
# Minardi
# March
# March-Ford
# Brabham-Ford

length(unique(test$drivername)) #27

# agg_fer 
# agg_mer
# agg_rbr
# agg_mcl
# agg_wls
# 
# agg_ren
# agg_has
# agg_afr
# agg_rcp
# agg_tor

head(fer)
str(mer)
#fer = fer[,-1]
g = mer %>% group_by(drivername) %>% mutate(ttlpoint = sum(points))
g
tg = subset(g[order(g$raceyear, g$drivername),])
tg[,c(4,5,7)]
unique(tg[,c(4,5,7)])

table(tg$ttlpoint)
subset(tg, drivername == "alonso")

subset(mer, drivername == "michael_schumacher")

df = data.frame(a=c(1,2,3,4,5), b=c(6,7,8,9,0))
df

`%notin%` <- Negate(`%in%`)
subset(df, a %notin% c(3,5))
