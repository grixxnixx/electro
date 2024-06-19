"use client";

import { useResource } from "@/app/_features/dealer-resources/useResource";
import NotFoundData from "@/app/components/ui/NotFoundData";
import Spinner from "@/app/components/ui/Spinner";
import UploadFileModal from "./UploadFile";
import Image from "next/image";
import { BASE_URL_IMAGE } from "@/app/lib/utils";
import { VscFilePdf } from "react-icons/vsc";
import { GrDocumentText } from "react-icons/gr";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import DeleteFile from "./DeleteFile";
import DeleteFolder from "./DeleteFolder";
import { useState } from "react";

// Utility functions to check file types
const isImage = (file) => {
  return file.match(/\.(jpeg|jpg|gif|png|webp)$/);
};

const isPDF = (file) => {
  return file.match(/\.pdf$/);
};

const isText = (file) => {
  return file.match(/\.(txt|doc|docx)$/);
};

const FolderPage = ({ folder_id }) => {
  const { data, isLoading, isError, error } = useResource(Number(folder_id));

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="flex gap-2 w-full justify-end mb-8">
        <DeleteFolder folder_id={folder_id} />
        <UploadFileModal folder_id={folder_id} />
      </div>
      {!isLoading &&
      !isError &&
      (!data?.data?.files || data?.data?.files?.length === 0) ? (
        <NotFoundData message="There are no files in this folder!" />
      ) : (
        <div className="flex flex-wrap gap-8">
          {data?.data.files.map((file, i) => (
            <Dialog key={i + 1}>
              <DialogTrigger>
                <div className="border border-gray-200 shadow-sm flex items-center justify-center cursor-pointer h-full">
                  {isImage(file) && (
                    <Image
                      src={`${BASE_URL_IMAGE}${file}`}
                      alt={`Resources ${i + 1}`}
                      width={150}
                      height={150}
                      className="p-2"
                    />
                  )}
                  {isPDF(file) && (
                    <div className="p-2 flex flex-col gap-2 items-center">
                      <VscFilePdf size={100} />

                      <p className="font-serif">PDF Document</p>
                    </div>
                  )}
                  {isText(file) && (
                    <div className="p-2 flex flex-col gap-2 items-center">
                      <GrDocumentText size={100} className="file-preview" />
                      <p className="font-serif">Text Document</p>
                    </div>
                  )}
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[60rem] pt-9">
                {isImage(file) && (
                  <Image
                    src={`${BASE_URL_IMAGE}${file}`}
                    alt={`Media ${i + 1}`}
                    width={1000}
                    height={800}
                  />
                )}
                {isPDF(file) && (
                  <iframe
                    src={`https://docs.google.com/gview?url=${BASE_URL_IMAGE}${file}&embedded=true`}
                    width="100%"
                    height="600px"
                    frameBorder="0"
                  />
                )}
                {isText(file) && (
                  <iframe
                    src={`https://docs.google.com/gview?url=${BASE_URL_IMAGE}${file}&embedded=true`}
                    width="100%"
                    height="600px"
                    frameBorder="0"
                  />
                )}
                <DeleteFile file_path={file} folder_id={folder_id} />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderPage;
