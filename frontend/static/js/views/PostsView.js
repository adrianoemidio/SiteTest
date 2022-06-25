import AbstraticView from "./AbstraticView.js";

export default class extends AbstraticView{
    constructor(params){
        super(params);
    }

    async getHtml(){
        console.log(this.params.id);
        return `<h1>This is the post view page</h1>
                <p>You are viewing the posts with arguments: ` + this.params['id'] + '</p>';
    }
}