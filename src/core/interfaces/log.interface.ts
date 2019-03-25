import { Document } from 'mongoose';

export interface Log extends Document {
    id: string;
    name: string;								// 日志名称
    operator: string;							// 操作人
    operatorIp: string;							// 操作人 IP
    operation: string;							// 操作事件; 
    comment: string;
    createdAt: Date;                         // 备注
}
