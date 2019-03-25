import { Document } from 'mongoose';

export interface Role extends Document {
	id: string;
	name: string;
	role: string;
	description: string;
	permissions: string[];
}
