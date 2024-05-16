import mongoose, { Schema } from 'mongoose';

const revokedTokensSchema = new Schema({
 userId: { type: String, require: true },
 tokens: { type: [{ iat: Number, exp: Number, value: String }], require: true },
});

export const RevokedTokensModel = mongoose.model(
 'RevokedTokens',
 revokedTokensSchema
);
