// rollbar.config.js
export default {
    accessToken: 'XXXX',
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      environment: 'dev',
      client: {
        javascript: {
          code_version: '1.0.0',
        }
      },
      person: {
        id: '1234',
        username: 'testuser',
        email: 'user@email'
      },
      custom: {
        trace_id: 'abcdefgh',
        feature_flag: [
            'feature_1',
            'feature_2'
        ]

      }
    },
  };