
import dns from "node:dns/promises";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db(process.env.AUTH_DB_NAME);

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  user: {
    additionalFields: {
      role: {
        type: ["patient", "doctor"],
        required: false,
        defaultValue: "patient",
      },

      status: {
        type: "string",
        required: false,
        defaultValue: "Active",
        input: false,
      },

      plan: {
        type: ["patient_free", "doctor_free"],
        required: false,
        defaultValue: "patient_free",
      },

      specialization: {
        type: "string",
        required: false,
      },

      gender: {
        type: "string",
        required: false,
      },

      phone: {
        type: "string",
        required: false,
      },
    },
  },

  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 7 * 24 * 60 * 60,
    },
  },

  plugins: [jwt()],
});
