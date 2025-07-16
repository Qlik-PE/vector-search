# Qlik Vector Search Extension

## Description


> **Note:** This extension is not an official or supported Qlik product. It is provided as-is, without warranty, and is intended for demonstration or custom solution purposes only.

The Qlik Vector Search Extension enables advanced search capabilities within Qlik Sense by integrating with external vector search services, such as those powered by Databricks or other AI-driven backends. This extension allows users to perform semantic or similarity-based searches directly from their Qlik Sense dashboards, leveraging the power of vector embeddings and large language models.

### Key Features
- **Semantic Search**: Go beyond keyword matching by searching for data using natural language queries and retrieving results based on meaning and context.
- **Integration with Qlik Application Automation**: Easily connect to Qlik Application Automation flows for orchestrating search requests and handling authentication, endpoints, and tokens.
- **Customizable UI**: Provides a user-friendly input field and button for submitting search queries, with configurable captions and search parameters.
- **Dynamic Selections**: Automatically selects and highlights relevant data in Qlik Sense apps based on the search results returned from the vector search service.
- **Flexible Backend Support**: Works with any vector search API that returns results in a compatible format, making it adaptable to various enterprise AI and search solutions.

### Typical Use Cases
- Finding similar documents, products, or records based on a user's query.
- Enabling natural language search in Qlik Sense dashboards.
- Integrating AI-powered recommendations or search results into analytics workflows.

For setup and installation instructions, see the sections above on installing the Qlik Application Automation and the Qlik Sense extension.

## 1. Installing the Qlik Application Automation

1. Open Qlik Application Automation in your Qlik Cloud environment.
2. Click on **Create new automation**.
3. In the automation editor, click the three dots (•••) in the top right and select **Import automation**.
4. Upload the provided `automation.json` file.
5. Create a Personal Access Token on your Databricks instance and update the variable **key** value.
6. Copy your Vector Search Index endpoint and paste it in the Call URL block.
7. From the **Start** block, copy your extension URL and your execution token to configure your extension later.
8. Save and activate the automation as needed.
   


## 2. Installing the Qlik Sense Extension

### Qlik Sense Enterprise (QMC) or Qlik Sense Desktop
1. Download the extension files to your local machine.
2. Zip the contents of the extension folder (all files, including `qlik-vector-search.js`, `qlik-vector-search.qext`, etc.).
   - Do **not** zip the parent folder itself, only the files inside it.
3. In Qlik Sense:
   - Go to the **Qlik Management Console (QMC)** if you are using Qlik Sense Enterprise, or **Dev Hub > Extensions** if you are using Qlik Sense Desktop.
   - Click **Import** (QMC) or **Add new extension** (Dev Hub).
   - Upload the zipped extension package.
4. The extension will now be available in the assets panel when editing an app.
5. Drag and drop the extension onto a sheet and configure its properties as needed.

### Qlik Cloud
1. Download the extension files to your local machine.
2. Zip the contents of the extension folder (all files, including `qlik-vector-search.js`, `qlik-vector-search.qext`, etc.).
   - Do **not** zip the parent folder itself, only the files inside it.
3. In Qlik Cloud:
   - Go to the **Console**.
   - Select **Extensions** from the menu.
   - Click **Add** or **Upload Extension**.
   - Upload the zipped extension package.
4. The extension will now be available in the assets panel when editing an app.
5. Drag and drop the extension onto a sheet and configure its properties as needed.


## Files
- `automation.json`: Qlik Application Automation configuration file.
- `qlik-vector-search.js`, `qlik-vector-search.qext`, etc.: Qlik Sense extension files.


## Support
For further help, refer to the Qlik documentation or contact your Qlik administrator.
