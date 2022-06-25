import AbstraticView from "./AbstraticView.js";

export default class extends AbstraticView{
    constructor(params){
        super(params);
        this.setTitle("Settings");
    }

    async getHtml(){
        return `<h1>You are in settings</h1>
                <p>Make sure to not mess up anything</p>`;
    }
}