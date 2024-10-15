let heroName = 'Hero Man'
let heroXp = 8030
let heroRank

if (heroXp < 1000){
    heroRank = 'ferro'
}else if (1001 <= heroXp && heroXp <= 2000){
    heroRank = 'bronze'
}else if (2001 <= heroXp && heroXp <= 5000){
    heroRank = 'prata'
}else if (5001 <= heroXp && heroXp <= 7000){
    heroRank = 'ouro'
}else if (7001 <= heroXp && heroXp <= 8000){
    heroRank = 'platina'
}else if (8001 <= heroXp && heroXp <= 9000){
    heroRank = 'ascendente'
}else if (9001 <= heroXp && heroXp <= 10000){
    heroRank = 'imortal'
}else{
    heroRank = 'radiante'
}

console.log(`O herói ${heroName} está no rank ${heroRank}`)