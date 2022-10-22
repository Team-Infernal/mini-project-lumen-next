type Article = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: any;
};

type User = {
  id: string;
  email: string;
  email_verified_at: string | null;
  name: string;
  role: Role;
  created_at: string;
  updated_at: string;
};

type Role = "user" | "author" | "admin";
