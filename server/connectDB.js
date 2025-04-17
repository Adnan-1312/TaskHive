mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected 🟢'))
.catch((err) => console.error('MongoDB connection failed 🔴', err));
