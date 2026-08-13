// ANSI Color Codes
const colors = {
    reset: "\x1b[0m",
    bold: "\x1b[1m",
    dim: "\x1b[2m",
    italic: "\x1b[3m",
    underline: "\x1b[4m",
    
    // Foreground colors
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    
    // Bright colors
    brightRed: "\x1b[91m",
    brightGreen: "\x1b[92m",
    brightYellow: "\x1b[93m",
    brightBlue: "\x1b[94m",
    brightMagenta: "\x1b[95m",
    brightCyan: "\x1b[96m",
    brightWhite: "\x1b[97m",
    
    // Backgrounds
    bgBlue: "\x1b[44m",
    bgCyan: "\x1b[46m",
    bgMagenta: "\x1b[45m",
    bgDarkGray: "\x1b[100m"
};

function stripAnsi(str) {
    return str.replace(/\x1b\[[0-9;]*m/g, '');
}

function printLogo() {
    const { cyan, brightCyan, brightBlue, brightMagenta, brightYellow, brightGreen, white, reset, bold, dim } = colors;

    const innerWidth = 76;
    const horizontalBorder = "═".repeat(innerWidth + 2);

    const artLines = [
        { text: "   ____  _             _            _   ", color: brightBlue },
        { text: "  / ___|| |_ _   _  __| | ___ _ __ | |_ ", color: brightBlue },
        { text: "  \\___ \\| __| | | |/ _` |/ _ \\ '_ \\| __|", color: brightBlue },
        { text: "   ___) | |_| |_| | (_| |  __/ | | | |_ ", color: brightBlue },
        { text: "  |____/ \\__|\\__,_|\\__,_|\\___|_| |_|\\__|", color: brightBlue },
        { text: "", color: reset },
        { text: "   __  __                                                   _   ", color: brightCyan },
        { text: "  |  \\/  | __ _ _ __   __ _  __ _  ___ _ __ ___   ___ _ __ | |_ ", color: brightCyan },
        { text: "  | |\\/| |/ _` | '_ \\ / _` |/ _` |/ _ \\ '_ ` _ \\ / _ \\ '_ \\| __|", color: brightCyan },
        { text: "  | |  | | (_| | | | | (_| | (_| |  __/ | | | | |  __/ | | | |_ ", color: brightCyan },
        { text: "  |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_| |_| |_|\\___|_| |_|\\__|", color: brightCyan },
        { text: "                            |___/                               ", color: brightCyan },
        { text: "", color: reset },
        { text: "   ____            _                 ", color: brightMagenta },
        { text: "  / ___| _   _ ___| |_ ___ _ __ ___  ", color: brightMagenta },
        { text: "  \\___ \\| | | / __| __/ _ \\ '_ ` _ \\ ", color: brightMagenta },
        { text: "   ___) | |_| \\__ \\ ||  __/ | | | | |", color: brightMagenta },
        { text: "  |____/ \\__, |___/\\__\\___|_| |_| |_|", color: brightMagenta },
        { text: "         |___/                       ", color: brightMagenta }
    ];

    console.clear();
    console.log(`${brightCyan}${bold}  ╔${horizontalBorder}╗${reset}`);
    console.log(`${brightCyan}${bold}  ║${" ".repeat(innerWidth + 2)}║${reset}`);

    // Print ASCII art lines
    for (const line of artLines) {
        const raw = line.text;
        const padding = " ".repeat(Math.max(0, innerWidth - raw.length));
        console.log(`${brightCyan}${bold}  ║  ${reset}${line.color}${raw}${padding}${brightCyan}${bold}║${reset}`);
    }

    console.log(`${brightCyan}${bold}  ║${" ".repeat(innerWidth + 2)}║${reset}`);
    console.log(`${brightCyan}${bold}  ╠${horizontalBorder}╣${reset}`);
    
    // Status Bar
    const statusText = `  🎓 ${white}${bold}STUDENT MANAGEMENT SYSTEM${reset}  ${dim}│${reset}  ${brightYellow}v1.0.0${reset}  ${dim}│${reset}  ${brightGreen}● Active (Dev Mode)${reset}`;
    const rawStatus = stripAnsi(statusText);
    const statusPadding = " ".repeat(Math.max(0, innerWidth + 2 - rawStatus.length));
    console.log(`${brightCyan}${bold}  ║${reset}${statusText}${statusPadding}${brightCyan}${bold}║${reset}`);

    const subText = `  ⚡ ${dim}Press Ctrl+C to stop the dev server at any time${reset}`;
    const rawSub = stripAnsi(subText);
    const subPadding = " ".repeat(Math.max(0, innerWidth + 2 - rawSub.length));
    console.log(`${brightCyan}${bold}  ║${reset}${subText}${subPadding}${brightCyan}${bold}║${reset}`);

    console.log(`${brightCyan}${bold}  ╚${horizontalBorder}╝${reset}\n`);
}

module.exports = { printLogo, colors };
