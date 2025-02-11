```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user have enter & submitted a message
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: 201 Created
    deactivate server

```