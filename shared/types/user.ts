import { userSchema } from '@/worker/db/schema/user';

export type User = typeof userSchema.$inferSelect;

export type UserInfo = {
  id: number;
  full_name: string;
  email: string;
  phone: string | null;
  avatar_url: string | null;
  language: string;
  country: string | null;
  region: string | null;
  coordinates_lat: number | null;
  coordinates_lng: number | null;
  user_type: string;
  can_offer_help: boolean;
  help_categories: string | null;
  reputation_score: number;
  verified: boolean;
  created_at: number;
  updated_at: number;
};

export type PublicUserInfo = {
  id: number;
  full_name: string;
  avatar_url: string | null;
  language: string;
  country: string | null;
  region: string | null;
  user_type: string;
  can_offer_help: boolean;
  help_categories: string | null;
  reputation_score: number;
  verified: boolean;
  created_at: number;
  email: string;
};
