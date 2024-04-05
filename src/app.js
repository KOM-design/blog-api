"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes")); // Import postRoutes
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/api', postRoutes_1.default); // Use postRoutes for '/api' endpoints
const MONGODB_URI = 'mongodb://localhost:27017/blog-api';
mongoose_1.default
    .connect(MONGODB_URI, {
    // Use the new connection options
    // useFindAndModify: false, // For deprecation warning
    useNewUrlParser: true, // Use the new URL string parser
    useUnifiedTopology: true, // Use the new Server Discovery and Monitoring engine
})
    // Mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
    .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});
