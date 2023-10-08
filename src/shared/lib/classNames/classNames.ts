export type Mods = Record<string, string | boolean | undefined>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className),
        ...additional.filter(Boolean),
    ]
        .join(' ')
        .trim();
}
