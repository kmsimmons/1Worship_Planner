import React from 'react';
import './BrainTree.css'
import DropIn from "braintree-web-drop-in-react";

export default class BrainTree extends React.Component {
    instance;

    state = {
      clientToken: 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSjkuZXlKbGVIQWlPakUxTmpJNU56RXlPRElzSW1wMGFTSTZJakF6TUdGak9HVXdMV0UyTVRrdE5EUmlNUzFpWWprNUxXVXdOemRpWm1SaE16SXdZU0lzSW5OMVlpSTZJak0wT0hCck9XTm5aak5pWjNsM01tSWlMQ0pwYzNNaU9pSkJkWFJvZVNJc0ltMWxjbU5vWVc1MElqcDdJbkIxWW14cFkxOXBaQ0k2SWpNME9IQnJPV05uWmpOaVozbDNNbUlpTENKMlpYSnBabmxmWTJGeVpGOWllVjlrWldaaGRXeDBJanBtWVd4elpYMHNJbkpwWjJoMGN5STZXeUp0WVc1aFoyVmZkbUYxYkhRaVhTd2liM0IwYVc5dWN5STZlMzE5LkUtZTlhVzBHejZUNExiSC1XR01DX3lpZjB5d2dVTVM0bFdtcTNkSzRPWGlQel8teV8wanYyZ2hVVWRBcUVjTW9jNDZneFYtMzJWUGdRVUw3OXBQbTRRIiwiY29uZmlnVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzM0OHBrOWNnZjNiZ3l3MmIvY2xpZW50X2FwaS92MS9jb25maWd1cmF0aW9uIiwiZ3JhcGhRTCI6eyJ1cmwiOiJodHRwczovL3BheW1lbnRzLnNhbmRib3guYnJhaW50cmVlLWFwaS5jb20vZ3JhcGhxbCIsImRhdGUiOiIyMDE4LTA1LTA4In0sImNoYWxsZW5nZXMiOltdLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvMzQ4cGs5Y2dmM2JneXcyYi9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9vcmlnaW4tYW5hbHl0aWNzLXNhbmQuc2FuZGJveC5icmFpbnRyZWUtYXBpLmNvbS8zNDhwazljZ2YzYmd5dzJiIn0sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsInBheXBhbEVuYWJsZWQiOnRydWUsInBheXBhbCI6eyJkaXNwbGF5TmFtZSI6IkFjbWUgV2lkZ2V0cywgTHRkLiAoU2FuZGJveCkiLCJjbGllbnRJZCI6bnVsbCwicHJpdmFjeVVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS9wcCIsInVzZXJBZ3JlZW1lbnRVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vdG9zIiwiYmFzZVVybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9jaGVja291dC5wYXlwYWwuY29tIiwiZGlyZWN0QmFzZVVybCI6bnVsbCwiYWxsb3dIdHRwIjp0cnVlLCJlbnZpcm9ubWVudE5vTmV0d29yayI6dHJ1ZSwiZW52aXJvbm1lbnQiOiJvZmZsaW5lIiwidW52ZXR0ZWRNZXJjaGFudCI6ZmFsc2UsImJyYWludHJlZUNsaWVudElkIjoibWFzdGVyY2xpZW50MyIsImJpbGxpbmdBZ3JlZW1lbnRzRW5hYmxlZCI6dHJ1ZSwibWVyY2hhbnRBY2NvdW50SWQiOiJhY21ld2lkZ2V0c2x0ZHNhbmRib3giLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwibWVyY2hhbnRJZCI6IjM0OHBrOWNnZjNiZ3l3MmIiLCJ2ZW5tbyI6Im9mZiJ9'
    };

    async componentDidMount() {
      // Get a client token for authorization from your server
      const response = await fetch("https://localhost:3000")
      const clientToken = await response.json(); // If returned as JSON string

      this.setState({
        clientToken
      });
    }

    async buy() {
      // Send the nonce to your server
      const { nonce } = await this.instance.requestPaymentMethod();
      await fetch(`server.test/purchase/${nonce}`);
    }

    render() {
      if (!this.state.clientToken) {
        return (
          <div>
            <h1>Loading...</h1>
          </div>
        );
      } else {
        return (
          <div>
            <DropIn
              options={{ authorization: this.state.clientToken }}
              onInstance={instance => (this.instance = instance)}
            />
            <button onClick={this.buy.bind(this)}>Buy</button>
          </div>
        );
      }
    }
  }
