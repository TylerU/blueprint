/*!
 * Copyright 2019 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ValidationMap } from "prop-types";
import * as Errors from "./errors";

export interface IWindowOverrideContext {
    /** Use this window object for any global variable access. */
    windowOverride?: Window;
}

export const WINDOW_OVERRIDE_REACT_CONTEXT_TYPES: ValidationMap<IWindowOverrideContext> = {
    windowOverride: (obj: IWindowOverrideContext, key: keyof IWindowOverrideContext) => {
        const variable = obj[key];
        if (variable != null && (variable.document == null || variable.location == null || variable.alert == null || variable.setInterval == null)) {
            return new Error(Errors.WINDOW_OVERRIDE_CONTEXT_CLASS_NAME_STRING);
        }
        return undefined;
    },
};
