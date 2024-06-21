import{Q as p,u as x,j as e,a as h,L as l,b as j,c as f}from"./app-0MdCaKYr.js";import{z as i,u as b,a as w,b as v,L as c,I as d,t as y}from"./use-toast-C0wYQmoV.js";import{B as N}from"./index-D4aWxuLC.js";const F=i.object({email:i.string().email("Invalid email address"),password:i.string().min(6,"Password must be at least 6 characters")});async function L(t){return(await j.post("/auth/login",t)).data}function S(){const t=new p,r=x(),{toast:o}=b(),{register:n,handleSubmit:m,formState:{errors:a}}=w({resolver:y(F)}),u=v({mutationFn:L,onSuccess:s=>{localStorage.setItem("api_token",s.accessToken),o({title:"Login Successful",description:"You have successfully logged in."}),r({to:"/dashboard"})},onError:s=>{o({title:"Login Failed",description:"Invalid email or password. Please try again."}),console.error("Login failed:",s)}}),g=s=>{u.mutate(s)};return e.jsx(h,{client:t,children:e.jsxs("div",{className:"w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]",children:[e.jsx("div",{className:"flex items-center justify-center py-12",children:e.jsxs("form",{onSubmit:m(g),className:"mx-auto grid w-[350px] gap-6",children:[e.jsxs("div",{className:"grid gap-2 text-center",children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Login"}),e.jsx("p",{className:"text-balance text-muted-foreground",children:"Enter your email below to login to your account"})]}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(c,{htmlFor:"email",children:"Email"}),e.jsx(d,{id:"email",type:"email",placeholder:"m@example.com",...n("email")}),a.email&&e.jsx("p",{className:"text-red-500",children:a.email.message})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(c,{htmlFor:"password",children:"Password"}),e.jsx(l,{href:"/forgot-password",className:"ml-auto inline-block text-sm underline",children:"Forgot your password?"})]}),e.jsx(d,{id:"password",type:"password",...n("password")}),a.password&&e.jsx("p",{className:"text-red-500",children:a.password.message})]}),e.jsx(N,{type:"submit",className:"w-full",children:"Login"})]}),e.jsxs("div",{className:"mt-4 text-center text-sm",children:["Don't have an account?"," ",e.jsx(l,{href:"/register",className:"underline",children:"Sign up"})]})]})}),e.jsx("div",{className:"hidden bg-muted lg:block",style:{backgroundImage:'url("https://anyway.software/_ipx/w_1080,q_75/%2F_next%2Fstatic%2Fmedia%2Ftim.b4f6f12b.jpeg?url=%2F_next%2Fstatic%2Fmedia%2Ftim.b4f6f12b.jpeg&w=1080&q=75")',backgroundRepeat:"repeat",backgroundSize:"100px 100px",height:"75vh",width:"100%",rotate:"178deg"}})]})})}const E=f("/login")({component:()=>e.jsx(S,{})});export{E as Route};
