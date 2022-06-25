import AbstraticView from "./AbstraticView.js";

export default class extends AbstraticView {
    constructor(params){
        //Call super constructor
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
            <h1>Welcome back!</h1>
            <p>Ut leo nisi, varius et aliquam vel, sollicitudin condimentum odio. Praesent molestie turpis quis metus tristique malesuada</p>
            <p>
                <a href="/posts" data-link>View recent posts</a>
            </p>
        `;
    }
}