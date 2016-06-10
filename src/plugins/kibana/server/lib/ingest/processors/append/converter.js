export default {
  kibanaToEs: function (processorApiDocument) {
    return {
      append: {
        tag: processorApiDocument.processor_id,
        field: processorApiDocument.target_field,
        value: processorApiDocument.values
      }
    };
  },
  esToKibana: function (processorEsDocument) {
    return {
      typeId: 'append',
      processor_id: processorEsDocument.tag,
      target_field: processorEsDocument.field,
      values: processorEsDocument.value
    };
  }
};