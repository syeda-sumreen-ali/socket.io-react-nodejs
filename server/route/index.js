const userRoutes = require("./user");
// const chatRoutes = require("./chat");
// const messageRoutes = require("./message");
const Router= app =>{
    app.use("/user", userRoutes)
    // app.use("/chat", chatRoutes)
    // app.use("/message", messageRoutes)

}

module.exports= Router