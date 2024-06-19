import { create } from 'zustand';

type TSalary = '0-1000' | '1000-2000' | '2000-3000' | '3000-4000' | '>4000' | '';

interface IFormData {
	fullName: string;
	email: string;
	phoneNumber: string;
	salary: TSalary;
}

interface IFormState {
	page: number;
	formData: IFormData;
	setPage: (page: number) => void;
	setFormData: (data: Partial<IFormData>) => void;
}

const useFormStore = create<IFormState>()(set => ({
	page: 0,
	formData: { fullName: '', email: '', phoneNumber: '', salary: '' },
	setPage: page => set(() => ({ page })),
	setFormData: data => set(state => ({ formData: { ...state.formData, ...data } })),
}));

export default useFormStore;
