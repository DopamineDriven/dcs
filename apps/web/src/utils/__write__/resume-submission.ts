export const ResumeSubmission = {
  "submitGfForm": {
    "clientMutationId": "QW5kcmV3LlJvc3M=",
    "confirmation": {
      "message": "<div id='gform_confirmation_wrapper_3' class='gform_confirmation_wrapper '><div id='gform_confirmation_message_3' class='gform_confirmation_message_3 gform_confirmation_message'>Thanks for contacting us! We will get in touch with you shortly.</div></div>",
      "pageId": null,
      "queryString": null,
      "type": "MESSAGE",
      "url": null,
      "__typename": "SubmissionConfirmation"
    },
    "errors": null,
    "__typename": "SubmitGfFormPayload",
    "entry": {
      "dateCreated": "2024-11-08 14:33:59",
      "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0",
      "__typename": "GfSubmittedEntry",
      "ip": "73.209.222.239",
      "formId": "Z2ZfZm9ybToz",
      "isSubmitted": true,
      "sourceUrl": "https://www.dcs-headless.com/graphql",
      "id": "Z2ZfZW50cnk6MjY=",
      "createdById": "dXNlcjoz",
      "createdByDatabaseId": 3,
      "dateCreatedGmt": "2024-11-08 19:33:59",
      "form": {
        "cssClass": null,
        "databaseId": 3,
        "dateCreated": "2024-11-07 18:08:45",
        "description": "prospective consultants can submit a resume",
        "title": "resume",
        "nextFieldId": 11,
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
            "cursor": "YXJyYXljb25uZWN0aW9uOjg=",
            "__typename": "GfEntryToFormFieldConnectionEdge",
            "node": {
              "databaseId": 8,
              "displayOnly": false,
              "inputType": "PHONE",
              "layoutGridColumnSpan": 12,
              "layoutSpacerGridColumnSpan": null,
              "pageNumber": 1,
              "type": "PHONE",
              "visibility": "VISIBLE",
              "__typename": "PhoneField"
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
              "visibility": "HIDDEN",
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
          },
          {
            "cursor": "YXJyYXljb25uZWN0aW9uOjEw",
            "__typename": "GfEntryToFormFieldConnectionEdge",
            "node": {
              "databaseId": 10,
              "displayOnly": true,
              "inputType": "HTML",
              "layoutGridColumnSpan": 12,
              "layoutSpacerGridColumnSpan": null,
              "pageNumber": 1,
              "type": "HTML",
              "visibility": "VISIBLE",
              "__typename": "HtmlField"
            }
          }
        ]
      }
    }
  }
};