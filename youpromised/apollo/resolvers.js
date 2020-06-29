export const resolvers = {
  Query: {
    viewer(_parent, _args, _context, _info) {
      return { id: 1, name: 'John Smith', status: 'cached' }
    },
  },
}


// const resolvers = {
//   Query: {
//     users(parent, args, context) {
//       return [{ firstName: 'Nextjs' }]
//     },
//   },
// }