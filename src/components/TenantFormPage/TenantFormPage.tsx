import React from 'react';

interface ITenantFormPage {
	header: string;
	subheader?: string;
	labelText: string;
	id: string;
	placeholder?: string;
	type: string;
	fieldset?: boolean;
	fieldsetData?: string[];
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TenantFormPage: React.FC<ITenantFormPage> = ({
	header,
	subheader,
	labelText,
	id,
	placeholder,
	type,
	fieldset = false,
	fieldsetData = [],
	onChange,
}) => {
	return <div></div>;
};

export default TenantFormPage;
