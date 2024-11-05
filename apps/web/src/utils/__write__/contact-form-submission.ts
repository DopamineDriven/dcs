export const ContactFormSubmission = {
  "submitGfForm": {
    "clientMutationId": "QW5kcmV3LlJvc3M=",
    "confirmation": {
      "message": "<div id='gform_confirmation_wrapper_1' class='gform_confirmation_wrapper '><div id='gform_confirmation_message_1' class='gform_confirmation_message_1 gform_confirmation_message'>Thanks for contacting us! We will get in touch with you shortly.</div></div>",
      "pageId": null,
      "queryString": null,
      "type": "MESSAGE",
      "url": null,
      "__typename": "SubmissionConfirmation"
    },
    "errors": null,
    "__typename": "SubmitGfFormPayload",
    "entry": {
      "dateCreated": "2024-11-04 22:58:46",
      "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0",
      "__typename": "GfSubmittedEntry",
      "ip": "73.209.222.239",
      "formId": "Z2ZfZm9ybTox",
      "isSubmitted": true,
      "sourceUrl": "https://www.dcs-headless.com/graphql",
      "id": "Z2ZfZW50cnk6NA==",
      "createdById": "dXNlcjox",
      "createdByDatabaseId": 1,
      "dateCreatedGmt": "2024-11-05 03:58:46",
      "form": {
        "cssClass": null,
        "databaseId": 1,
        "dateCreated": "2024-11-04 20:52:50",
        "description": "contact us form",
        "title": "contact us",
        "nextFieldId": 8,
        "__typename": "GfForm"
      },
      "formFields": {
        "__typename": "GfEntryToFormFieldConnection",
        "edges": [
          {
            "cursor": "YXJyYXljb25uZWN0aW9uOjE=",
            "__typename": "GfEntryToFormFieldConnectionEdge",
            "node": {
              "databaseId": 1,
              "displayOnly": false,
              "inputType": "NAME",
              "layoutGridColumnSpan": null,
              "layoutSpacerGridColumnSpan": null,
              "pageNumber": 1,
              "type": "NAME",
              "visibility": "VISIBLE",
              "__typename": "NameField"
            }
          },
          {
            "cursor": "YXJyYXljb25uZWN0aW9uOjM=",
            "__typename": "GfEntryToFormFieldConnectionEdge",
            "node": {
              "databaseId": 3,
              "displayOnly": false,
              "inputType": "EMAIL",
              "layoutGridColumnSpan": 12,
              "layoutSpacerGridColumnSpan": null,
              "pageNumber": 1,
              "type": "EMAIL",
              "visibility": "VISIBLE",
              "__typename": "EmailField"
            }
          },
          {
            "cursor": "YXJyYXljb25uZWN0aW9uOjY=",
            "__typename": "GfEntryToFormFieldConnectionEdge",
            "node": {
              "databaseId": 6,
              "displayOnly": false,
              "inputType": "TEXT",
              "layoutGridColumnSpan": 12,
              "layoutSpacerGridColumnSpan": null,
              "pageNumber": 1,
              "type": "TEXT",
              "visibility": "VISIBLE",
              "__typename": "TextField"
            }
          },
          {
            "cursor": "YXJyYXljb25uZWN0aW9uOjc=",
            "__typename": "GfEntryToFormFieldConnectionEdge",
            "node": {
              "databaseId": 7,
              "displayOnly": false,
              "inputType": "TEXTAREA",
              "layoutGridColumnSpan": 12,
              "layoutSpacerGridColumnSpan": null,
              "pageNumber": 1,
              "type": "TEXTAREA",
              "visibility": "VISIBLE",
              "__typename": "TextAreaField"
            }
          }
        ]
      }
    }
  }
};