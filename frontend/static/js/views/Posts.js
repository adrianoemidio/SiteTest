import AbstraticView from "./AbstraticView.js";

export default class extends AbstraticView {
    constructor(params){
        super(params);
        this.setTitle("Posts")
    }

    async getHtml(){
        return `<h1>This is the post page</h1>
                <p>You are viewing the posts</p>`;
    }
}