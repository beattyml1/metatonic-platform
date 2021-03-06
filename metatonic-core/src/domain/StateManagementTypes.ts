import {FormNavigator} from "../services/PropertySelection";
import {FieldState} from "./FieldState/FieldState";
import {FormSchema} from "./Schema/RootSchemas";
import {FormProperties} from "./EditorModels/FormProperties";

export enum FormEvents {
    initialize = 'METATONIC_FORM__initialize',
    initializeState = 'METATONIC_FORM__initializeState',
    initializeStateEmpty = 'METATONIC_FORM__initializeStateEmpty',
    propertyChanged = 'METATONIC_FORM__PROPERTY_CHANGED',
    propertiesChanged = 'METATONIC_FORM__PROPERTIES_CHANGED',
    trySubmit = 'METATONIC_FORM__TRY_SUBMIT',
    validateFormSync = ' METATONIC_FORM__validateFormSync',
    itemAdded = 'METATONIC_FORM__ITEM_ADDED',
    itemRemoved = 'METATONIC_FORM__ITEM_REMOVED',
    formServerDataUpdate = 'METATONIC_FORM__FORM_SERVER_DATA_UPDATE',
    fullReload = 'METATONIC_FORM__FULL_RELOAD',
    submitCallStarted = 'METATONIC_FORM__submitCallStarted',
    submitSucceeded = 'METATONIC_FORM__submitSucceeded',
    submitFailed = 'METATONIC_FORM__submitFailed',
    submitAttemptFinished = 'METATONIC_FORM__submitAttemptFinished',
    loadStarted = 'METATONIC_FORM__loadStarted',
    loadFinished = 'METATONIC_FORM__loadFinished'
}

export type AllMetatonicEvents = FormEvents;

export type StandardAction<Type extends string, TData = any> = { type: Type; payload: TData, error?: any };
export type MetatonicAction<TData =any> = StandardAction<AllMetatonicEvents, TData>
export type FormAction<TData =any> = StandardAction<FormEvents, TData>;

export type MetatonicRootAction<TData = any> = MetatonicAction<TData> & { meta: { formId } }
export type FormState = {
    formData: any;
    formProps: FormProperties;
    serverDocumentData: any;
    schema: FormSchema;
    formState: FieldState;
    navigator: FormNavigator;
    isNew: boolean;
}
