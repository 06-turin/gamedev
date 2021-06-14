import { ButtonHTMLAttributes } from 'react';

export type GDButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string
    styleOption: 'primary' | 'secondary'
}
