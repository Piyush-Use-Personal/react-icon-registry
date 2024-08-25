import React from 'react';
export class IconBuilder<T extends Record<string, string> = {}> {
    private icons: T;

    constructor() {
        this.icons = {} as T;
    }

    getIcon<K extends keyof T>(name: K): T[K] {
        return this.icons[name];
    }

    getImage<K extends keyof T>(name: K, alt?: string): JSX.Element {
        return <img src={this.getIcon(name)} alt={alt || name.toString()} />;
    }

    register<K extends string, C extends string>(entry: { name: K, component: C }): IconBuilder<T & Record<K, C>> {
        this.icons = { ...this.icons, [entry.name]: entry.component } as T & Record<K, C>;
        return this as unknown as IconBuilder<T & Record<K, C>>;
    }

    getKeys() {
        return Object.keys(this.icons) as Array<keyof T>;
    }
}
