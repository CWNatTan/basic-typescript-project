export function cookingTime(eggs: number): number {
    return Math.ceil(eggs / 8) * 5;
}

export const likes = (a: string[]): string => {
    return [
        "no one likes this",
        `${a[0]} likes this`,
        `${a[0]} and ${a[1]} like this`,
        `${a[0]}, ${a[1]} and ${a[2]} like this`,
        `${a[0]}, ${a[1]} and ${a.length - 2} others like this`,
    ][Math.min(a.length, 4)];
}