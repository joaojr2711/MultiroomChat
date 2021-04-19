const app = require('./config/server');

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running... 🚀`);
})