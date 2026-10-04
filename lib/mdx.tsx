import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import Callout from "@/components/blog/Callout";
import {
  AgentLoopHero,
  AgentLoopFlow,
  CoatCheck,
  IdSwapExperiment,
  ApiCompare,
} from "@/components/blog/agent-loop-visuals";

export const mdxComponents = {
  Callout,
  AgentLoopHero,
  AgentLoopFlow,
  CoatCheck,
  IdSwapExperiment,
  ApiCompare,
};

export const mdxOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    rehypePlugins: [[rehypeHighlight, { ignoreMissing: true }]],
  },
};
