import React from 'react';

type TInputType = 'email' | 'text' | 'tel' | 'radio';
type TAutoComplete = 'name' | 'email' | 'tel';

interface ITenantFormPage {
	header: string;
	subheader?: string;
	labelText: string;
	inputId: string;
	placeholder?: string;
	inputType: TInputType;
	fieldset?: boolean;
	fieldsetData?: string[];
	autoCompleteType?: TAutoComplete;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TenantFormPage: React.FC<ITenantFormPage> = ({
	header,
	subheader,
	labelText,
	inputId, // is beeing utilised as htmlFor, name, id, value
	placeholder,
	inputType,
	autoCompleteType,
	fieldset = false,
	fieldsetData = [],
	onChange,
}) => {
	return (
		<div className='pb-12'>
			<h2 className='text-2xl md:text-3xl font-semibold dark:text-white'>{header}</h2>

			{subheader && (
				<p className='mt-4 text-base md:text-lg leading-6 text-gray-600'>{subheader}</p>
            )}
            
			<div className='mt-16 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
				<div className='sm:col-span-4'>
					<label
						htmlFor={inputId}
						className='block text-sm font-normal leading-tight text-stone-600 dark:text-neutral-300'>
						{labelText}
					</label>

					<div className='mt-2'>
						<div className='flex rounded-xl shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md'>
							<input
								type={inputType}
								name={inputId}
								id={inputId}
								required
								onChange={onChange}
								value={inputId}
								autoComplete={autoCompleteType}
								className='block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6 focus:outline-none focus-within:ring-2 focus-within:ring-inset focus-within:ring-black rounded-xl'
								placeholder={placeholder}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TenantFormPage;
