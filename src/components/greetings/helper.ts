class NameModifier {
    constructor() {

    }
    public getUpdatedName(name:string):string{
        return `${this.getTitle()} ${name}`;
    }
    private getTitle(gender:string='Male'):string{
        const title = gender==='Male'? 'Mr.': 'Ms.';
        return title;
    }
}

export const nameModifier = new NameModifier();