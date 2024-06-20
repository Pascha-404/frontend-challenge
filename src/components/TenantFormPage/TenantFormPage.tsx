import React from 'react';

type TInputType = 'email' | 'text' | 'tel' | 'radio';
type TAutoComplete = 'name' | 'email' | 'tel';

interface IBaseFormPage {
	header: string;
	subheader?: string;
	labelText: string;
	inputId: string;
	inputValue: string;
	placeholder?: string;
	inputType: TInputType;
	fieldset?: boolean;
	fieldsetLegend?: string;
	fieldsetData?: string[];
	autoCompleteType?: TAutoComplete;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	textTransform?: (text: string) => string;
}

interface IFieldsetProps {
	fieldset: true;
	fieldsetLegend: string;
	fieldsetData: string[];
}

interface INonFieldsetProps {
	fieldset?: false;
}

type ITenantFormPage = IBaseFormPage & (IFieldsetProps | INonFieldsetProps);

const TenantFormPage: React.FC<ITenantFormPage> = ({
	header,
	subheader,
	labelText,
	inputId, // is beeing utilised as htmlFor, name, id
	inputValue, // contains the value from form store
	placeholder,
	inputType,
	autoCompleteType,
	fieldset = false,
	fieldsetLegend,
	fieldsetData = [],
	onChange,
	textTransform = text => text, // Defaults to an identity function, which will retyrn the text as-is
}) => {
	if (!fieldset) {
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
									value={inputValue}
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
	} else {
		return (
			<div className='pb-12'>
				<h2 className='text-2xl md:text-3xl font-semibold dark:text-white'>{header}</h2>
				{subheader && (
					<p className='mt-4 text-base md:text-lg leading-6 text-gray-600'>{subheader}</p>
				)}

				<div className='mt-10 space-y-10'>
					<fieldset>
						<legend className='mt-6 block text-sm font-normal leading-tight text-stone-600 dark:text-neutral-300'>
							{fieldsetLegend}
						</legend>

						<div className='space-y-6'>
							{fieldsetData.map((item, idx) => (
								<div
									key={`${inputId}Item-${idx}`}
									className='mt-2 h-full w-full flex items-center justify-between gap-x-3 border-2 rounded-xl shadow-sm  hover:border-black focus-within:ring-2 focus:outline-none focus-within:ring-inset focus-within:ring-black sm:max-w-md px-3 py-1.5'>
									<label
										htmlFor={`${inputId}Item-${idx}`}
										className='cursor-pointer w-full block text-sm font-medium leading-6 text-gray-900'>
										{textTransform(item)}
									</label>
									<input
										id={`${inputId}Item-${idx}`}
										name={inputId}
										type={inputType}
										onChange={onChange}
										value={item}
										checked={inputValue === item}
										className='cursor-pointer h-4'
									/>
								</div>
							))}
						</div>
					</fieldset>
				</div>
			</div>
		);
	}
};

export default TenantFormPage;
