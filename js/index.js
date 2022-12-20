Vue.component("gamesquare", {
    props: ["square"],
    template: '<div class="col square"><img src="img/deebly_head_excited.png" class="deebly"></img><div class="squaretext" v-html="square.text">{{square.text}}</div></div>'
});

Vue.component("gamerow", {
    props: ["row"],
    template: '<div class="row"><gamesquare v-for="item in row.squares" v-bind:square="item" v-bind:key="item.id"></gamesquare></div>'
});

var app = new Vue({
    el: "#card",
    data: {
        players: [],
        card: {
            rows: [
                {
                    squares: [
                        { text: "" },
                        { text: "" },
                        { text: "" },
                        { text: "" },
                        { text: "" },
                    ]
                },
                {
                    squares: [
                        { text: "" },
                        { text: "" },
                        { text: "" },
                        { text: "" },
                        { text: "" },
                    ]
                },
                {
                    squares: [
                        { text: "" },
                        { text: "" },
                        { text: "" },
                        { text: "" },
                        { text: "" },
                    ]
                },
                {
                    squares: [
                        { text: "" },
                        { text: "" },
                        { text: "" },
                        { text: "" },
                        { text: "" },
                    ]
                },
                {
                    squares: [
                        { text: "" },
                        { text: "" },
                        { text: "" },
                        { text: "" },
                        { text: "" },
                    ]
                }
            ]
        }
    },
    methods: {
        getPlayers() {
            $.ajax({
                url: apiUrl + "players",
                data: {},
                success: res => this.players = res,
                error: error => console.log("error: " + error)
            });
        },
        getSquares() {
            player = $("#playerSelect").val();
            var currentUrl = apiUrl + "squares/";
            if (player != "Guest") currentUrl += player;
            $.ajax({
                url: currentUrl,
                data: {},
                success: res => this.card = res,
                error: error => console.log("error: " + error)
            });
        }

    },
    mounted() {
        this.getPlayers()
    }
})