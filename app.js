const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const staticRoutes = require('./routes/staticRoutes'); // Новий маршрут для статичних сторінок
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', postRoutes);
app.use('/', staticRoutes); // Додаємо нові маршрути

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
