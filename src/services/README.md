# PanoraSDK Services
A list of all services and services methods.
- Services

    - [Main](#main)

    - [Auth](#auth)

    - [Connections](#connections)

    - [Webhook](#webhook)

    - [LinkedUsers](#linkedusers)

    - [Organisations](#organisations)

    - [Projects](#projects)

    - [FieldMapping](#fieldmapping)

    - [Events](#events)

    - [MagicLink](#magiclink)

    - [Passthrough](#passthrough)

    - [CrmContact](#crmcontact)
- [All Methods](#all-methods)


## Main

| Method    | Description|
| :-------- | :----------|
| [appControllerGetHello](#appcontrollergethello) |  |


## Auth

| Method    | Description|
| :-------- | :----------|
| [signUp](#signup) |  |
| [signIn](#signin) |  |
| [getUsers](#getusers) |  |
| [getApiKeys](#getapikeys) |  |
| [generateApiKey](#generateapikey) |  |


## Connections

| Method    | Description|
| :-------- | :----------|
| [handleOAuthCallback](#handleoauthcallback) |  |
| [getConnections](#getconnections) |  |


## Webhook

| Method    | Description|
| :-------- | :----------|
| [createWebhookMetadata](#createwebhookmetadata) |  |
| [getWebhooksMetadata](#getwebhooksmetadata) |  |
| [updateWebhookStatus](#updatewebhookstatus) |  |


## LinkedUsers

| Method    | Description|
| :-------- | :----------|
| [addLinkedUser](#addlinkeduser) |  |
| [getLinkedUsers](#getlinkedusers) |  |
| [getLinkedUser](#getlinkeduser) |  |


## Organisations

| Method    | Description|
| :-------- | :----------|
| [getOrganisations](#getorganisations) |  |
| [createOrganisation](#createorganisation) |  |


## Projects

| Method    | Description|
| :-------- | :----------|
| [getProjects](#getprojects) |  |
| [createProject](#createproject) |  |


## FieldMapping

| Method    | Description|
| :-------- | :----------|
| [getFieldMappingsEntities](#getfieldmappingsentities) |  |
| [getFieldMappings](#getfieldmappings) |  |
| [getFieldMappingValues](#getfieldmappingvalues) |  |
| [defineTargetField](#definetargetfield) |  |
| [mapField](#mapfield) |  |
| [getCustomProviderProperties](#getcustomproviderproperties) |  |


## Events

| Method    | Description|
| :-------- | :----------|
| [getEvents](#getevents) |  |


## MagicLink

| Method    | Description|
| :-------- | :----------|
| [createMagicLink](#createmagiclink) |  |
| [getMagicLinks](#getmagiclinks) |  |
| [getMagicLink](#getmagiclink) |  |


## Passthrough

| Method    | Description|
| :-------- | :----------|
| [passthroughRequest](#passthroughrequest) |  |


## CrmContact

| Method    | Description|
| :-------- | :----------|
| [addContact](#addcontact) |  |
| [getContacts](#getcontacts) |  |
| [updateContact](#updatecontact) |  |
| [getContact](#getcontact) |  |
| [addContacts](#addcontacts) |  |




## All Methods


### **appControllerGetHello**

- HTTP Method: GET
- Endpoint: /




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.main.appControllerGetHello();
  console.log(result);
})();

```


### **signUp**

- HTTP Method: POST
- Endpoint: /auth/register

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    email: 'email',
    first_name: 'first_name',
    last_name: 'last_name',
    password_hash: 'password_hash',
  };
  const result = await sdk.auth.signUp(input);
  console.log(result);
})();

```

### **signIn**

- HTTP Method: POST
- Endpoint: /auth/login

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { email: 'email', id_user: 'id_user', password_hash: 'password_hash' };
  const result = await sdk.auth.signIn(input);
  console.log(result);
})();

```

### **getUsers**

- HTTP Method: GET
- Endpoint: /auth/users




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.auth.getUsers();
  console.log(result);
})();

```

### **getApiKeys**

- HTTP Method: GET
- Endpoint: /auth/api-keys




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.auth.getApiKeys();
  console.log(result);
})();

```

### **generateApiKey**

- HTTP Method: POST
- Endpoint: /auth/generate-apikey

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { keyName: 'keyName', projectId: 'projectId', userId: 'userId' };
  const result = await sdk.auth.generateApiKey(input);
  console.log(result);
})();

```


### **handleOAuthCallback**

- HTTP Method: GET
- Endpoint: /connections/oauth/callback

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| state | string |  |
| code | string |  |
| location | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.connections.handleOauthCallback('state', 'code', 'location');
  console.log(result);
})();

```

### **getConnections**

- HTTP Method: GET
- Endpoint: /connections




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.connections.getConnections();
  console.log(result);
})();

```


### **createWebhookMetadata**

- HTTP Method: POST
- Endpoint: /webhook

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    description: 'description',
    id_project: 'id_project',
    scope: 'scope',
    url: 'url',
  };
  const result = await sdk.webhook.createWebhookMetadata(input);
  console.log(result);
})();

```

### **getWebhooksMetadata**

- HTTP Method: GET
- Endpoint: /webhook




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.webhook.getWebhooksMetadata();
  console.log(result);
})();

```

### **updateWebhookStatus**

- HTTP Method: PUT
- Endpoint: /webhook/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.webhook.updateWebhookStatus('id');
  console.log(result);
})();

```


### **addLinkedUser**

- HTTP Method: POST
- Endpoint: /linked-users/create

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    alias: 'alias',
    id_project: 'id_project',
    linked_user_origin_id: 'linked_user_origin_id',
  };
  const result = await sdk.linkedUsers.addLinkedUser(input);
  console.log(result);
})();

```

### **getLinkedUsers**

- HTTP Method: GET
- Endpoint: /linked-users




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.linkedUsers.getLinkedUsers();
  console.log(result);
})();

```

### **getLinkedUser**

- HTTP Method: GET
- Endpoint: /linked-users/single

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.linkedUsers.getLinkedUser('id');
  console.log(result);
})();

```


### **getOrganisations**

- HTTP Method: GET
- Endpoint: /organisations




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.organisations.getOrganisations();
  console.log(result);
})();

```

### **createOrganisation**

- HTTP Method: POST
- Endpoint: /organisations/create

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { name: 'name', stripe_customer_id: 'stripe_customer_id' };
  const result = await sdk.organisations.createOrganisation(input);
  console.log(result);
})();

```


### **getProjects**

- HTTP Method: GET
- Endpoint: /projects




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.projects.getProjects();
  console.log(result);
})();

```

### **createProject**

- HTTP Method: POST
- Endpoint: /projects/create

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { id_organization: 'id_organization', name: 'name' };
  const result = await sdk.projects.createProject(input);
  console.log(result);
})();

```


### **getFieldMappingsEntities**

- HTTP Method: GET
- Endpoint: /field-mapping/entities




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.fieldMapping.getFieldMappingsEntities();
  console.log(result);
})();

```

### **getFieldMappings**

- HTTP Method: GET
- Endpoint: /field-mapping/attribute




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.fieldMapping.getFieldMappings();
  console.log(result);
})();

```

### **getFieldMappingValues**

- HTTP Method: GET
- Endpoint: /field-mapping/value




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.fieldMapping.getFieldMappingValues();
  console.log(result);
})();

```

### **defineTargetField**

- HTTP Method: POST
- Endpoint: /field-mapping/define

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    data_type: 'data_type',
    description: 'description',
    name: 'name',
    object_type_owner: 'object_type_owner',
  };
  const result = await sdk.fieldMapping.defineTargetField(input);
  console.log(result);
})();

```

### **mapField**

- HTTP Method: POST
- Endpoint: /field-mapping/map

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    attributeId: 'attributeId',
    linked_user_id: 'linked_user_id',
    source_custom_field_id: 'source_custom_field_id',
    source_provider: 'source_provider',
  };
  const result = await sdk.fieldMapping.mapField(input);
  console.log(result);
})();

```

### **getCustomProviderProperties**

- HTTP Method: GET
- Endpoint: /field-mapping/properties

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| linkedUserId | string |  |
| providerId | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.fieldMapping.getCustomProviderProperties('linkedUserId', 'providerId');
  console.log(result);
})();

```


### **getEvents**

- HTTP Method: GET
- Endpoint: /events




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.events.getEvents();
  console.log(result);
})();

```


### **createMagicLink**

- HTTP Method: POST
- Endpoint: /magic-link/create

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    alias: 'alias',
    email: 'email',
    id_project: 'id_project',
    linked_user_origin_id: 'linked_user_origin_id',
  };
  const result = await sdk.magicLink.createMagicLink(input);
  console.log(result);
})();

```

### **getMagicLinks**

- HTTP Method: GET
- Endpoint: /magic-link




**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.magicLink.getMagicLinks();
  console.log(result);
})();

```

### **getMagicLink**

- HTTP Method: GET
- Endpoint: /magic-link/single

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.magicLink.getMagicLink('id');
  console.log(result);
})();

```


### **passthroughRequest**

- HTTP Method: POST
- Endpoint: /passthrough

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| integrationId | string |  |
| linkedUserId | string |  |
| input | object | Request body. |



**Return Type**

PassThroughResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = { data: {}, headers_: {}, method: 'PATCH', path: 'path' };
  const result = await sdk.passthrough.passthroughRequest(input, 'integrationId', 'linkedUserId');
  console.log(result);
})();

```


### **addContact**

- HTTP Method: POST
- Endpoint: /crm/contact

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| integrationId | string |  |
| linkedUserId | string |  |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean |  |


**Return Type**

AddContactResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = {
    email_addresses: [],
    field_mappings: {},
    first_name: 'first_name',
    last_name: 'last_name',
    phone_numbers: [],
  };
  const result = await sdk.crmContact.addContact(input, 'integrationId', 'linkedUserId', {
    remoteData: true,
  });
  console.log(result);
})();

```

### **getContacts**

- HTTP Method: GET
- Endpoint: /crm/contact

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| integrationId | string |  |
| linkedUserId | string |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean |  |


**Return Type**

GetContactsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmContact.getContacts('integrationId', 'linkedUserId', {
    remoteData: true,
  });
  console.log(result);
})();

```

### **updateContact**

- HTTP Method: PATCH
- Endpoint: /crm/contact

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmContact.updateContact('id');
  console.log(result);
})();

```

### **getContact**

- HTTP Method: GET
- Endpoint: /crm/contact/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | string |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean |  |


**Return Type**

GetContactResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.crmContact.getContact('id', { remoteData: true });
  console.log(result);
})();

```

### **addContacts**

- HTTP Method: POST
- Endpoint: /crm/contact/batch

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| integrationId | string |  |
| linkedUserId | string |  |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| remoteData | boolean |  |


**Return Type**

AddContactsResponse

**Example Usage Code Snippet**
```Typescript
import { PanoraSDK } from './src';

const sdk = new PanoraSDK({ accessToken: process.env.PANORASDK_ACCESS_TOKEN });

(async () => {
  const input = [{}, {}];
  const result = await sdk.crmContact.addContacts(input, 'integrationId', 'linkedUserId', {
    remoteData: true,
  });
  console.log(result);
})();

```




