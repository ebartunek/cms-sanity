export default {
    name: "dashboard",
    title: "Dashboard",
    type: "document",
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "faqDisplay",
            title: "FAQ Display",
            type: "array",
            of: [{
                type: "reference",
                to: [
                    {type: "faq"}
                ]
            }]
        }
    ],
    preview: {
        select: {
          title: 'title',
        }
      }
}