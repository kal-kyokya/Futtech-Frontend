To access the content rendered by my app on `localhost:3000` from my computer while coding on my remote server using Git Bash, I followed these steps:

### **1. SSH Port Forwarding (Tunneling)**
I used SSH port forwarding to securely access the remote app as if it were running locally.

I Ran the following command on my local machine (replacing `my-linode-ip` with my server’s IP):

```sh
ssh -L 3000:localhost:3000 my-user@my-linode-ip
```

- This forwards traffic from `localhost:3000` on my local computer to `localhost:3000` on the Linode server.
- I was then able to access the app by opening **http://localhost:3000** in my browser.
- Important to note that the server session opened needs to stay open for me to access it in my browser.

---

### **2. Adjust Firewall and Security Rules**
Since I prefer accessing the server directly using its IP address:

- Allow incoming traffic on port `3000` using `ufw` (Ubuntu):

  ```sh
  sudo ufw allow 3000/tcp
  sudo ufw reload
  ```
Then, I tried accessing **http://my-linode-ip:3000** from my local browser.
