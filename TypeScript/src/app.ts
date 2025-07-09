import express from 'express';
import userRoutes from './routers/users';
const app = express();
app.use('/users', userRoutes);
app.listen(process.env.PORT);