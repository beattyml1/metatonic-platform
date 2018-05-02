import * as React from "react";
import {BaseEditorModel} from "metatonic-core";
import {AnyTypeParameterType, SchemaType} from "metatonic-core";
import {BaseFieldContextComponent} from "../BaseFieldContextComponent";
import {ValidationSeverity} from "../../../metatonic-core/src/domain/Schema/SchemaValidation";

export abstract class BaseEditor
    <TData,
     TType extends AnyTypeParameterType,
     TParams extends BaseEditorModel<TData>,
     TState = {}>
    extends BaseFieldContextComponent<TParams, TState> {

    fieldLocator() {
        return this.props.context.fieldLocator
    }

    formDispatcher() {
        return this.props.resources.formDispatcher;
    }

    type() {
        return Object.assign({}, this.props.field.type, this.props.field.type.parameters as TType)
    }

    value() {
        return this.props.value;
    }

    notifyChanged(value) {
        this.props.resources.formDispatcher.propertyChanged({
            propertySelector: this.fieldLocator(),
            value: this.value()
        })
    }

    primaryInputAriaAttributes() {
        return {
        }
    }
}