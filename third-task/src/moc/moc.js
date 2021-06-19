const data = [{id: 1, name: "some1", date: "2021-10-15", category: "some1", content: "some1"},
    {id: 2, name: "some2", date: "2021-9-14", category: "some2", content: "some2"},
    {id: 3, name: "some3", date: "2021-8-13", category: "some3", content: "some3"},
    {id: 4, name: "some4", date: "2021-7-12", category: "some4", content: "some4"},
    {id: 5, name: "some5", date: "2021-6-11", category: "some5", content: "some5"},
    {id: 6, name: "some6", date: "2021-5-10", category: "some6", content: "some6"},
    {id: 7, name: "some7", date: "2021-4-16", category: "some7", content: "some7"}
]


module.exports = {
    state: data,
    setState(state) {
        this.state = state
    }
}