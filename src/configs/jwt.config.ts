export default {
  secret: String(process.env.JWT_SECRET!),
  expiresIn: process.env.EXPIRES_IN!,
};
