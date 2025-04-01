"use client";

import { Suspense } from "react";
import { Text } from "@/components/ui/Text/Text";
import { Space } from "@/components/ui/Space/Space";
import styles from "./page.module.css";
import Gallery from "./components/Gallery/Gallery";

export default function GalleryPage() {
  return (
    <Space p={8} className={styles.page}>
      <Space mb={8} mt={1} asChild>
        <Text size="xl" weight="bold" align="center" asChild>
          <h1>Gallery</h1>
        </Text>
      </Space>
      <Gallery />
    </Space>
  );
}
