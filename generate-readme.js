// macro: Generates the readme
let file = context.getFile();

const topPart = `This github profile contains all of my personal projects.

Here are the most notable:`

const createSection = (heading, entries) => {
    return {
        heading: heading,
        entries: entries,
    };
};

const createEntry = (name, href, decoration, details) => {
    return {
        name: name,
        href: href,
        decoration: decoration,
        details: details,
    };
};

const sections = [
    createSection("Actively working on:", [
        createEntry(
            "Powerslide",
            "private",
            "(Unity3D, C#)",
            `An arcade racing game that is the successor to [Racing Drift](https://gamejolt.com/games/RacingDrift/377289) that will actually be good when it's released`
        ),
        createEntry(
            "Minimal Application Framework",
            "https://github.com/El-Tejaso/CSharp-Minimal-Application-Framework",
            "(C#, .net6, OpenGL) ⭐",
            `An app development library with an API that is heavily inspired by Processing, but aims to be used for app development rather than creative programming or live coding.`
        ),
    ]),
    createSection("Completed:", [
        createEntry(
            "Macro runner",
            "https://github.com/El-Tejaso/MacroRunner",
            "(TypeScript, JavaScript, VS-Code Extension) ⭐",
            `A [VSCode extension](https://marketplace.visualstudio.com/items?itemName=El-Tejaso.macro-runner) that uses some variant of JavaScript's \`eval\` function to arbitrary snippets of code on text files that are currently open. This project is by far the epitome of software engineering - taking two things that already exist, connecting them together to make something slightly better and then taking full credit for the final product. It is easily the most useful thing I have made so far. This readme was actually generated with [a script]() ran by this extension. Writing a script for such a task is usually thought of as unnecessary, but this extension makes it so easy that you can't not write a script for it.`
        ),
        createEntry(
            "Non-Grating Timer",
            "https://github.com/El-Tejaso/Non-Grating-Timer",
            "(C#, WinForms (Yep you read that right xD))",
            `An extremely simple timer that alerts you in a way that is almost guaranteed to get your attention without startling/jump-scaring you or making you lose focus. The secret - no audio. Instead, the window starts bouncing around the screen, which is why I had to do this as a native application.`
        ),
        createEntry(
            "Rust journal",
            "https://github.com/El-Tejaso/Rust-journal",
            "(Rust)",
            `A simple journal program that allows you to log to a journal, which is just a folder that contains 1 text file per day of the year. I use it every day. Writing this program made allowed me to no-longer hate rust. It's actually a pretty good language, and much easier to work with and understand when you have a VSCode extension with type-inference, and cargo-watch running in a second monitor.`
        ),
    ]),
    createSection("Shelved, but I plan on coming back to it:", [
        createEntry(
            "EntityComponentSystem",
            "https://github.com/El-Tejaso/EntityComponentSystem",
            "(C#)",
            `An attempt at writing a fast and understandable ECS implementation in C#. Probably a poor choice of language for this kind of thing but I like using it, and that is also kind of the point. I have not been able to make this particularly fast, but I plan on trying to use source generators for this later.`
        ),
        createEntry(
            "Song Timing Generator",
            "https://github.com/El-Tejaso/SongTimingGenerator/blob/main/README.md",
            "(C#, WinForms (lmao), Digital signal processing)",
            `A program created with the intent of generating 'multi-bpm timings' for rhythm game charts. This is actually quite hard to do, and I was not able to. Yet. But I do have some idea of what to try next`
        ),
    ]),
    createSection(
        "No longer working on, hope someone else makes it / executes it better it so I don't have to:",
        [
            createEntry(
                "Harmonic table",
                "https://github.com/El-Tejaso/Harmonic-Table",
                "(Unity3D, C#, Music?) ⭐",
                `A virtual musical instrument based on the harmonic table layout. Someone posted a very similar project to HackerNews, and I had a lot of fun playing with it. So I copied it into a Unity game and tried to recreate it, with the aim that it will also be able teach you how to play songs by converting MIDI files to notes that a user can see and then play. Turns out that this instrument is insanely hard to learn, and the relationships between different hexagons are not intuitive at all, so I didn't want to put any more time into it`
            ),
            createEntry(
                "Sound painter",
                "https://github.com/El-Tejaso/Sound-Painter",
                "(Processing, Java, UI, Digital signal processing)",
                `A processing sketch that lets you edit a snippet of sound with brushes. Sound is much more complex that I thought at the time, and this editor is super lacking in that regard. The UI looks pretty cool though`
            )
            
        ]
    ),
];

const mapJoin = (stringArray, func) => {
    return stringArray.map(func).join("");
};

file.setText(`${topPart}
${mapJoin(
    sections,
    (section) =>
        `
## ${section.heading}

${mapJoin(section.entries, (entry) => {
    const summaryText = entry.href === "private" ? entry.name : `<a href="${entry.href}">${entry.name}</a>`;

    return `<details>
<summary>${summaryText} ${entry.decoration}</summary>

${entry.details}
</details>

`;
})}
`
)}
`);
