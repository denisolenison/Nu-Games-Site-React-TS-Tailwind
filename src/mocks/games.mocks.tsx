export const BigGamesShortDesc = [
    {
        name: "Revolution Idle X",
        shortName: 'RIX',
    },
]

export const SmallGamesShortDesc = [
    {
        name: "Vector Incremental",
        shortName: 'vector',
    },
    {
        name: "Vaccine Idle",
        shortName: 'vaccine',
    },
    {
        name: "Cats & Trees",
        shortName: 'cats_trees',
    },
    {
        name: "IdleByte RE",
        shortName: 'idlebyte_re',
    },
    {
        name: "IdleByte 2",
        shortName: 'idlebyte2',
    },
    {
        name: "Simple Mult Idle",
        shortName: 'smi',
    },
    {
        name: "Multiplier Grid",
        shortName: 'mult_grid',
    },
    {
        name: "Revolution Idle RE",
        shortName: 'rev_idle_re',
    },
    {
        name: "Formula Upgrade Idle",
        shortName: 'formula',
    },
    {
        name: "Nu Life",
        shortName: 'nu_life',
    },
    {
        name: "Cat Clicker RE",
        shortName: 'cat_clicker_re',
    },
    {
        name: "Cat Clicker MLG",
        shortName: 'cat_clicker_mlg',
    },
    {
        name: "Stat Stealer Alpha",
        shortName: 'stat_stealer',
    },
    {
        name: "Apple Tree Idle",
        shortName: 'ati',
    },
    {
        name: "Apple Tree Idle 2",
        shortName: 'ati2',
    },
    {
        name: "Doggo Clicker",
        shortName: 'doggo',
    },
    {
        name: "Tower Merge",
        shortName: 'tower_merge',
    },
    {
        name: "Idle Miner",
        shortName: 'idle_miner',
    },
    {
        name: "Moth Idle",
        shortName: 'moth_idle',
    },
    {
        name: "Snowflakes Idle RE",
        shortName: 'snowflakes',
    },
    {
        name: "Pop It Idle",
        shortName: 'pop_it_idle',
    },
    {
        name: "Simple Loot Idle",
        shortName: 'sli',
    },
]

export const gamesColors = ["rgb(255, 230, 230, 0.8)", "rgb(255, 243, 230, 0.8)",
    "rgb(255, 255, 230, 0.8)", "rgb(230, 255, 230, 0.8)",
    "rgb(230, 255, 255, 0.8)", "rgb(230, 230, 255, 0.8)",
    "rgb(255, 230, 255, 0.8)", "rgb(255, 255, 255, 0.8)"]


export const getLinksOfGames: any = (shortName: string) => {
    return {
        link: `games/${shortName}.html`,
        iconLink: `games/icons/${shortName}.png`,
    }
}