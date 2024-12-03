export interface BaseField {
    type: FieldType;        // Type of the field ('text', 'number', 'select', etc.)
    label: string;          // Label for the field
    value: any;             // Initial or current value of the field
    rules?: FieldRules;     // Validation rules (optional)
}

export interface ValidationRule<T>{
    value: T;
    message: string;
}

export interface BaseFieldRules {
    required?: ValidationRule<boolean>;  // Ensures the field is filled out or selected
}

export interface DateFieldRules extends BaseFieldRules {
    minDate?: ValidationRule<string>;  // Minimum valid date (for date fields)
    maxDate?: ValidationRule<string>;  // Maximum valid date (for date fields)
    pattern?: ValidationRule<string>
}

export interface SelectFieldRules extends BaseFieldRules {
    validSelection?: ValidationRule<boolean>; // Ensures a valid option is selected (not an empty value)
}

export interface CheckboxFieldRules extends BaseFieldRules {
    checked?: ValidationRule<boolean>;  // Ensures the checkbox is checked (for required checkboxes)
}

export interface RadioFieldRules extends BaseFieldRules {
    validSelection?: ValidationRule<boolean>; // Ensures a valid radio option is selected (not the default)
}

export interface TextFieldRules extends BaseFieldRules {
    minLength?: ValidationRule<number>;  // Text fields can have minLength and maxLength
    maxLength?: ValidationRule<number>;
    pattern?: ValidationRule<string>
}

export interface NumberFieldRules extends BaseFieldRules {
    min?: ValidationRule<number>;  // Number fields can have min and max values
    max?: ValidationRule<number>;
}

export interface RadioField extends BaseField {
    type: 'radio';             // Radio field type
    options: RadioOption[];    // Available options for the radio button
    rules?: RadioFieldRules;   // Radio-specific rules
}

export interface SelectField extends BaseField {
    type: 'select';            // Select field type
    options: SelectOption[];   // List of available options
    provideData?: Array<{    // Optional dynamic data based on another field (e.g., cities based on country)
        label: string;
        sourceValue: string;
        value: string;
    }>;
    rules?: SelectFieldRules;  // Select-specific rules
}
export interface SelectOption {
    label: string;
    value: string;
}
export interface RadioOption {
    label: string;
    value: string;
}
export interface CheckboxField extends BaseField {
    type: 'checkbox';          // Checkbox type
    rules?: CheckboxFieldRules; // Checkbox-specific rules
}

export interface BaseTextField extends BaseField{
    placeholder?: string;
}

export interface DateField extends BaseTextField {
    type: 'date';              // Date field type
    rules?: DateFieldRules;    // Date-specific rules
}


export interface TextField extends BaseTextField {
    type: 'text' | 'number' | 'date' | 'email';  // These types share the same structure
}

export interface TextAreaField extends BaseTextField {
    type: 'textarea';
    rows?: number;
    cols?: number;
}

export interface FileUploadField extends BaseField{
    type: 'file';
    accept?: string; // Specifies the file types to accept (e.g., '.jpg, .png, .pdf')
    multiple?: boolean; // Whether multiple files can be uploaded
    rules?: FileUploadFieldRules
}

export interface FileUploadFieldRules extends BaseFieldRules{
    maxSize?: ValidationRule<number>; // Maximum file size in bytes (optional)
    maxFiles?: ValidationRule<number>; // Maximum number of files (for `multiple` mode)
    allowedExtensions?: ValidationRule<string>; // Array of allowed file extensions (e.g., ['jpg', 'png', 'pdf'])
}

export type FieldType =
    | 'text'
    | 'number'
    | 'email'
    | 'date'
    | 'radio'
    | 'checkbox'
    | 'select'
    | 'file'
    | 'textarea';

export type FieldRules =
    | TextFieldRules
    | NumberFieldRules
    | DateFieldRules
    | SelectFieldRules
    | CheckboxFieldRules
    | FileUploadFieldRules
    | RadioFieldRules;


export interface FormFieldDefinition {
    [key: string]: TextField | RadioField | CheckboxField | SelectField | TextAreaField | FileUploadField;
}
