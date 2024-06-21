import{Q as g,u as x,j as e,a as u,L as h,b as j,c as w}from"./app-9sdbZg__.js";import{z as r,u as f,a as b,b as N,t as y}from"./use-toast-iQTR_G4K.js";import{B as v}from"./index-C9qvHn_H.js";import{L as i,I as n}from"./label-WMGcOIQA.js";const F=r.object({name:r.string().min(1,"Name is required"),email:r.string().email("Invalid email address"),password:r.string().min(6,"Password must be at least 6 characters"),c_password:r.string().min(6,"Password must be at least 6 characters")}).refine(a=>a.password===a.c_password,{message:"Passwords must match",path:["c_password"]});async function _(a){return(await j.post("/auth/register",a)).data}function R(){const a=new g,l=x(),{toast:c}=f(),{register:t,handleSubmit:d,formState:{errors:s}}=b({resolver:y(F)}),m=N({mutationFn:_,onSuccess:()=>{c({title:"Registration Successful",description:"You have successfully registered. Please log in."}),l({to:"/login"})},onError:o=>{c({title:"Registration Failed",description:"There was an error registering your account. Please try again."}),console.error("Registration failed:",o)}}),p=o=>{m.mutate(o)};return e.jsx(u,{client:a,children:e.jsxs("div",{className:"w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]",children:[e.jsx("div",{className:"flex items-center justify-center py-12",children:e.jsxs("form",{onSubmit:d(p),className:"mx-auto grid w-[350px] gap-6",children:[e.jsxs("div",{className:"grid gap-2 text-center",children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Register"}),e.jsx("p",{className:"text-balance text-muted-foreground",children:"Create your account by filling the information below"})]}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(i,{htmlFor:"name",children:"Name"}),e.jsx(n,{id:"name",type:"text",placeholder:"John Doe",...t("name")}),s.name&&e.jsx("p",{className:"text-red-500",children:s.name.message})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(i,{htmlFor:"email",children:"Email"}),e.jsx(n,{id:"email",type:"email",placeholder:"m@example.com",...t("email")}),s.email&&e.jsx("p",{className:"text-red-500",children:s.email.message})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(i,{htmlFor:"password",children:"Password"}),e.jsx(n,{id:"password",type:"password",...t("password")}),s.password&&e.jsx("p",{className:"text-red-500",children:s.password.message})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(i,{htmlFor:"c_password",children:"Confirm Password"}),e.jsx(n,{id:"c_password",type:"password",...t("c_password")}),s.c_password&&e.jsx("p",{className:"text-red-500",children:s.c_password.message})]}),e.jsx(v,{type:"submit",className:"w-full",children:"Register"})]}),e.jsxs("div",{className:"mt-4 text-center text-sm",children:["Already have an account?"," ",e.jsx(h,{href:"/login",className:"underline",children:"Login"})]})]})}),e.jsx("div",{className:"hidden bg-muted lg:block",style:{backgroundImage:'url("https://anyway.software/_ipx/w_1080,q_75/%2F_next%2Fstatic%2Fmedia%2Ftim.b4f6f12b.jpeg?url=%2F_next%2Fstatic%2Fmedia%2Ftim.b4f6f12b.jpeg&w=1080&q=75")',backgroundRepeat:"repeat",backgroundSize:"100px 100px",height:"100vh",width:"100%"}})]})})}const C=w("/register")({component:()=>e.jsx(R,{})});export{C as Route};
